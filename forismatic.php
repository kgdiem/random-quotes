<?php
header('Access-Control-Allow-Origin: *');

$baseURL = "https://api.forismatic.com/api/1.0/?";

$requestURL = $baseURL . $_SERVER['QUERY_STRING'];

function getQuote($requestURL){
  $ch = curl_init();

  curl_setopt($ch, CURLOPT_URL, $requestURL);

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  $json = curl_exec($ch);

  curl_close($ch);

  $json = json_encode(json_decode($json));

  return (is_null($json) || $json === "null") ? getQuote($requestURL) : $json;
}

echo getQuote($requestURL);

?>