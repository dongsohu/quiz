/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var typeOfFood = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var totalScore;
        function Q1(num){
        var question1Total;
        
        if("Beach"){
            return question1Total = 1;
        }else if("City"){
            return question1Total = 2;
        }else if("Countryside"){
            return question1Total = 3;
        }else{
            return question1Total = 4;
        }
         }
    function Q2(num){
        var question2Total;
        if("Winter"){
            return question2Total = 4;
        }else if("Spring"){
            return question2Total = 3
        }else if("Summer"){
            return question2Total = 2;
        }else{
            return question2Total = 1;
        }
    }
    function Q3(num){
        var question3Total;
        if("Tokyo, Japan"){
            return question3Total = 3;
        }else if("New York, United States"){
            return question3Total = 1;
        }else if("Sydney, Australia"){
            return question3Total = 2;
        }else{
            return question3Total = 4;
        }
    }
    function Q4(num){
        var question4Total;
        if("Coco-Cola"){
            return question4Total = 2;
        }else if("Water"){
            return question4Total = 3;
        }else if("Ice-tea"){
            return question4Total = 1;
        }else{
            return question4Total = 4;
        }
    }
    function finale(q1R, q2R, q3R, q4R){
        var questionsTotal = Q1(q1Result) + Q2(q2Result) + Q3(q3Result) + Q4(q4Result);
        if(questionsTotal === 16){
            $('#answer').text("You are Sushi");
        }else if(questionsTotal < 15 && questionsTotal >11){
            $("#answer").text("You are Burger");
        }else if(questionsTotal < 10 && questionsTotal >6){
            $("#answer").text("You are Fries");
        }else{
            $("#answer").text("You are Mac & Cheese");
        }
        
    }
    
});

    });
    