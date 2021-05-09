/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author evan
 */
import lib.httpcomponents-client-5.0.3.lib.org.apache.http.HttpResponse;

public class WeatherAPI {
    
    
    public static void main(String args[]){
        
            //5 day forcast
    HttpResponse<String> response = Unirest.get("https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus")
	.header("x-rapidapi-key", "c256d71f81mshd4aa85a84c78453p1dff9djsn649fa2915de4")
	.header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
	.asString();
    
    
    //current weather data
    HttpResponse<String> response = Unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html")
	.header("x-rapidapi-key", "c256d71f81mshd4aa85a84c78453p1dff9djsn649fa2915de4")
	.header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
	.asString();
    }
        
    
}
