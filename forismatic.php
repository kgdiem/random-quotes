<?php

$baseURL = "https://api.forismatic.com/api/1.0/?";

$requestURL = $baseURL . $_SERVER['QUERY_STRING'];

$ch = curl_init(); 

curl_setopt($ch, CURLOPT_URL, $requestURL); 

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

$json = curl_exec($ch); 

curl_close($ch);

echo $json;

?>