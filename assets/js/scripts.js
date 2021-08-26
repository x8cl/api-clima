$(document).ready(function(){

    //$.get( "api.key", function(api_key) {
    //    var api_key = apikey;
    //  });
    
    $("#form_ql").submit(function(form_clima){
        form_clima.preventDefault();
        var city_form = $("#city_form").val();
        var country_code = $("#country_code").val();
        console.log(country_code)
        var apikey = "0b33ad85c786ff878a3ec98fcafa0f6f";
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city_form + "," + country_code + "&units=metric&lang=es&appid=" + apikey;

        if (city_form.trim().length > 0 && country_code != 0){
                $.get(url, function(data){
                let main = data.weather[0].main;
                let country = data.sys.country;
                let city = data.name;
                let description = data.weather[0].description;
                let temp = data.main.temp;
                let desc = description[0].toUpperCase() + description.substring(1);
                let icon =  "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                console.log(icon)

                data.weather[0].icon

                $("#country").html(country);
                $("#city").html(city);
                $("#main").html(main);
                $("#desc").html(desc + "<img id=icon></img>");
                $("#temp").html(temp);
                $("#icon").attr("src", icon);
                $("#icon").attr("alt", desc);

                
            },"json").fail(function(){
                $('#city_form').attr("placeholder", "No se encuentra la ciudad buscada");
                $('#city_form').val("");
            });
        }
        else{
            alert("Debes ingresar una ciudad y un pais para buscar...");
        }
    }); 
});