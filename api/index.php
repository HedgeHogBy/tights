<?php

require 'Slim/Slim.php';

use Slim\Slim;
Slim::registerAutoloader();

$app = new Slim();

//-----tights-----
$app->get('/all-tights', 'getItems');
$app->get('/all-tights/:id', 'getItem');
$app->get('/all-tights/search/:query', 'findByName');
$app->post('/all-tights', 'addItem');
$app->put('/all-tights/:id', 'updateItem');
$app->delete('/all-tights/:id', 'deleteItem');

//-----collections-----
$app->get('/collections', 'getCollections');

//-----colors-----
$app->get('/colors', 'getColors');

//-----features-----
$app->get('/features', 'getFeatures');

//-----types-----
$app->get('/types', 'getCategories');


$app->run();


//-----tights-----

function getItems() {
	$sql = "select * FROM th_tights ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$tights = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($tights);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getItem($id) {
	$sql = "SELECT * FROM th_tights WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$tights = $stmt->fetchObject();
		$db = null;
		echo json_encode($tights);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function addItem() {
	error_log('addWine\n', 3, '/var/tmp/php.log');
	$request = Slim::getInstance()->request();
	$wine = json_decode($request->getBody());
	$sql = "INSERT INTO wine (name, grapes, country, region, year, description) VALUES (:name, :grapes, :country, :region, :year, :description)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("name", $wine->name);
		$stmt->bindParam("grapes", $wine->grapes);
		$stmt->bindParam("country", $wine->country);
		$stmt->bindParam("region", $wine->region);
		$stmt->bindParam("year", $wine->year);
		$stmt->bindParam("description", $wine->description);
		$stmt->execute();
		$wine->id = $db->lastInsertId();
		$db = null;
		echo json_encode($wine); 
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function updateItem($id) {
	$request = Slim::getInstance()->request();
	$body = $request->getBody();
	$wine = json_decode($body);
	$sql = "UPDATE wine SET name=:name, grapes=:grapes, country=:country, region=:region, year=:year, description=:description WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("name", $wine->name);
		$stmt->bindParam("grapes", $wine->grapes);
		$stmt->bindParam("country", $wine->country);
		$stmt->bindParam("region", $wine->region);
		$stmt->bindParam("year", $wine->year);
		$stmt->bindParam("description", $wine->description);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo json_encode($wine); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function deleteItem($id) {
	$sql = "DELETE FROM th_tights WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function findByName($query) {
	$sql = "SELECT * FROM th_tights WHERE UPPER(name) LIKE :query ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$query = "%".$query."%";  
		$stmt->bindParam("query", $query);
		$stmt->execute();
		$tights = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo '{"tights": ' . json_encode($tights) . '}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

//-----collections-----
function getCollections() {
	$sql = "select * FROM th_collections ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$collections = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($collections);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

//-----colors-----
function getColors() {
	$sql = "select * FROM th_colors ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$colors = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($colors);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

//-----features-----
function getFeatures() {
	$sql = "select * FROM th_feature ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$features = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($features);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

//-----types-----
function getCategories() {
	$sql = "select * FROM th_category ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$types = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($types);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}











function getConnection() {
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="";
	$dbname="tights";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}
?>