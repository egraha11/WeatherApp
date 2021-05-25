/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author evan
 */
//import org.apache.http.HttpResponse;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;



public class WeatherAPI {
    
    
    public static void main(String args[]) throws IOException, InterruptedException{
        
        
        int externalValue = 1;
        
        
        String city = "London";
        city.replace(" ", "%20");
        
        
        String country = "uk".toLowerCase(); 
        
        
        
        //https://www.javatpoint.com/java-json-example
        //https://stackoverflow.com/questions/18451052/how-to-include-jars-in-lib-into-project-jar-file-in-netbeans/26815335
        
        
        if(externalValue == 1){
        //current  
            HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://community-open-weather-map.p.rapidapi.com/weather?q=" + city + "%2C" + country + "&lat=0&lon=0&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html"))
		.header("x-rapidapi-key", "c256d71f81mshd4aa85a84c78453p1dff9djsn649fa2915de4")
		.header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

            Object obj=JSONValue.parse(response.body().toString());  
            JSONObject jsonObject = (JSONObject) obj;
            
            //parse for temp, min, max, humidity
            JSONObject mainSection = (JSONObject) jsonObject.get("main");
            String temp = mainSection.get("temp").toString();
            String temp_min = mainSection.get("temp_min").toString();
            String temp_max = mainSection.get("temp_max").toString();
            String humidity = mainSection.get("humidity").toString();
            
            
            //parse for current general weather condition
            //JSONObject secondSection = (JSONObject) jsonObject.get("weather");
            //String main = secondSection.get("main").toString();
            //System.out.println(main);
            
            
            System.out.println(mainSection);
            //System.out.println(temp);
            //System.out.println(temp_min);
            //System.out.println(temp_max);
            //System.out.println(humidity);
            //System.out.println(main);
            //System.out.println(response.body());
        
        }
        
        else{    
        //5 day 
            HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://community-open-weather-map.p.rapidapi.com/forecast?q=" + city + "%2C" + country))
		.header("x-rapidapi-key", "c256d71f81mshd4aa85a84c78453p1dff9djsn649fa2915de4")
		.header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        
            System.out.println(response.body());
        }
     
    }
        
    
}
