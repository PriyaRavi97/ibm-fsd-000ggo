function dialog_Handler({
    title,
    message,
    buttons,
    input
  }) {
    $("<p>" + message + "</p>").dialog({ // Could use “var dialog = ”
      //autoOpen: false,					// false would prevents regular opening
      show: "drop",
      open: function(event, ui) {
        // Overlay parameterization
        $("div.ui-widget-overlay").css({
          "background": "#000",
          "opacity": "0.4"
        });
        $(".ui-widget-overlay").hide().fadeIn();
        // Adds some more configuration if input needed
        if (input) {
          // Adds input field right under the message
          $(this).append('<br /><br /><input id="dialog_Input" style="width: 350px; padding: 4px;" type="text" value="' + input + '"><br />');
          // Binds “Enter” to press first button (usually “Ok”)
          $(this).keydown(function(event) {
            if (event.keyCode == $.ui.keyCode.ENTER) {
              $(this).parent().find("button:eq(1)").trigger("click");
              return false;
            }
          });
        }
      },
      title: title,
      buttons: buttons,
      modal: true,
      resizable: false,
      height: "auto",
      width: 400,
      hide: {
        effect: "drop",
        duration: "fast"
      },
      closeOnEscape: true,
      // Overlay fadeout
      beforeClose: function(event, ui) {
        // Wait for the overlay to be faded out to try closing again
        if ($('.ui-widget-overlay').is(":visible")) {
          $('.ui-widget-overlay').fadeOut("fast", function() {
            $('.ui-widget-overlay').hide();
            $('.ui-icon-closethick').trigger('click');
          });
          return false;
        }
      },
      close: function() {
        $(this).dialog("destroy");
      }
    });
    return;
  }
  
  function Experience({
    title,
    message,
    funk_Ok
  }) {
    var buttons = {
      "Yes": function() {
        funk_Ok();
        exp_det();
        $(this).dialog("close");
      },
      "Cancel": function() {
        $(this).dialog("close");
      }
    }
    dialog_Handler({
      title,
      message,
      buttons
    });
    return;
  }
  
  function schooling({
    title,
    message,
    input,
    funk_Ok
  }) {
    var buttons = {
      "Ok": function() {
        funk_Ok();
        next();
        $(this).dialog("close");
      },
      "Cancel": function() {
        $(this).dialog("close");
      }
    }
    dialog_Handler({
      title,
      message,
      buttons,
      input
    });
    return;
  }
  
  function Graduation({
    title,
    message,
    funk_Yes,
    funk_No
  }) {
    var buttons = {
      "Yes": function() {
        funk_Yes();
        next2()
        $(this).dialog("close");
      },
      "No": function() {
        funk_No();
        $(this).dialog("close");
      },
      "Cancel": function() {
        $(this).dialog("close");
      }
    }
    dialog_Handler({
      title,
      message,
      buttons
    });
    return;
  }
  
  function Address({
      title,
      message,
      funk_Yes,
      funk_No
    }) {
      var buttons = {
        "Yes": function() {
          funk_Yes();
          next4()
          $(this).dialog("close");
        },
        "Cancel": function() {
          $(this).dialog("close");
        }
      }
      dialog_Handler({
        title,
        message,
        buttons
      });
      return;
    }
  
    function Skills({
      title,
      message,
      funk_Yes,
    }) {
      var buttons = {
        "Ok": function() {
          funk_Yes();
          next5()
          $(this).dialog("close");
        },
        "Cancel": function() {
          $(this).dialog("close");
        }
      }
      dialog_Handler({
        title,
        message,
        buttons
      });
      return;
    }
  
  
    function Income({
        title,
        message,
        input,
        funk_Yes,
      }) {
        var buttons = {
          "Ok": function() {
            funk_Yes();
            next6()
            $(this).dialog("close");
          },
          "Cancel": function() {
            $(this).dialog("close");
          }
        }
        dialog_Handler({
          title,
          message,
          buttons,
          input
        });
        return;
      }

      const exp_det = ()=>{
        let record = `Its Great!<br> Let Us know about your experience.<br>Number of years Experience :(In years)<input type="number" id="yrs" value="yrs"> (In months) <input type="number" id="mth" value="mth"> 
                       <br><br> Work Experience : <textarea rows="5" cols="40" onclick="close1()" placeholder="Enter your woork experience"></textarea>`
        document.getElementById('exp').innerHTML = record ;
    }
    
    const close1 = ()=>{
        let close = `<p>As you are a fresher, You can move to next button</p>`;
        document.getElementById('close').innerHTML = close ;
    }
    
    
    const next = ()=>{
        let record = `      <label>&nbsp;10TH Percentage</label>
                                <input type="number" name="12th" max="100" placeholder="Enter 12th Percentage" required /><br/><br/>
                                school name : <textarea rows="2" cols="40" onclick="next1()" placeholder="Enter your school name"></textarea><br><br>`
                document.getElementById('10th').innerHTML = record ;
    }
    
    const next1 = ()=>{
        let record = `      <label>&nbsp;12TH Percentage</label>
                                <input type="number" name="12th" max="100" placeholder="Enter 12th Percentage" required /><br/><br/>
                                school name : <textarea rows="2" cols="40" placeholder="Enter your school name"></textarea><br><br>`
                document.getElementById('12th').innerHTML = record ;
    }
    
    const next2 = ()=>{
        let record = `      <label>&nbsp;UG Percentage</label>
                                <input type="number" name="ug" max="100" placeholder="Enter UG Percentage/CGPA" required /><br/><br/>
                                college name : <textarea rows="2" cols="40" onclick="next3()" placeholder="Enter your university and college name : "></textarea><br><br>`
                document.getElementById('ug').innerHTML = record ;
    }
    const next3 = ()=>{
        let record = `      <label>&nbsp;PG Percentage</label>
                            <input type="number" name="pg" max="100" placeholder="Enter PG Percentage" /><br/>
                            college name : <textarea rows="2" cols="40" placeholder="Enter your university and college name : "></textarea><br><br>`
                document.getElementById('pg').innerHTML = record ;
    }
    const next4 = ()=>{
        let record = `<label>&nbsp;Address &nbsp; &nbsp; &nbsp; </label>
                            <textarea rows="2" cols="40" onclick="next5()" placeholder="Enter your permanent address"></textarea>
                            <br/><br><br>`
                document.getElementById('address').innerHTML = record ;
    }
    
    const next5 = ()=>{
        let record = ` <label>&nbsp;Skills</label> <br>
                            <input type="checkbox" name="skill" value="C">C<br/>
                            <input type="checkbox" name="skill" value="C++">C++<br/>
                            <input type="checkbox" name="skill" value="Java">Java<br/>
                            <input type="checkbox" name="skill" value="Python">Python<br/>
                            <input type="checkbox" name="skill" value="JavaScript">JavaScript<br/>
                            <input type="checkbox" name="skill" value="dotnet">dotnet<br/>
                            <input type="checkbox" name="skill" value="Linux">Linux<br/>   
                            Other Skills : <input type="text" name="othr"  id="other" placeholder="Enter the other skills" onclick="next6()"><br><br>`
                        document.getElementById('skill').innerHTML = record ;
    
    }
    
    const next6 = ()=>{
        let record = `<label>&nbsp; Expected Income</label>
                        <input type="number" name="income" max="10000000" placeholder="Enter Expected Income" required/><br/><br> 
                            <br/>
                        <button type="submit" name="submit">Submit</button><br><br></br>`
                        document.getElementById('income').innerHTML = record ;
    
    }
    
    /*const exp_det = ()=>{
        let record = `Number of years Experience :(In years)<input type="number" id="yrs" value="yrs"> (In months) <input type="number" id="mth" value="mth"> 
                       <br><br> Work Experience : <textarea rows="5" cols="40" onclick="close1()" placeholder="Enter your woork experience"></textarea>`
        document.getElementById('exp').innerHTML = record ;
    }
    
    const close1 = ()=>{
        let close = `<p>You can close the popup and check the next button</p>`;
        document.getElementById('close').innerHTML = close ;
    }
    
    const next = ()=>{
        let record = `      school name : <textarea rows="2" cols="40" onclick="next1()" placeholder="Enter your school name"></textarea><br><br>`
                            document.getElementById('10th').innerHTML = record ;
    }                       
    
    const next1 = ()=>{
        let record = `      <label>&nbsp;12TH Percentage</label>
                                <input type="number" name="12th" max="100" onclick="next2()" placeholder="Enter 12th Percentage" required /><br/><br/>
                                school name : <textarea rows="2" cols="40" onclick="next()" placeholder="Enter your school name"></textarea><br><br>`
                document.getElementById('12th').innerHTML = record ;
    }
    
    const next2 = ()=>{
        let record = `      <label>&nbsp;UG Percentage</label>
                                <input type="number" name="ug" max="100" onclick="next3()" placeholder="Enter UG Percentage/CGPA" required /><br/><br/>
                                college name : <textarea rows="2" cols="40" onclick="next()" placeholder="Enter your university and college name : "></textarea><br><br>`
                document.getElementById('ug').innerHTML = record ;
    }
    const next3 = ()=>{
        let record = `      <label>&nbsp;PG Percentage</label>
                            <input type="number" name="pg" max="100" onclick="next4()" placeholder="Enter PG Percentage" /><br/>
                            college name : <textarea rows="2" cols="40" onclick="next()" placeholder="Enter your university and college name : "></textarea><br><br>`
                document.getElementById('pg').innerHTML = record ;
    }
    const next4 = ()=>{
        let record = `  <label>&nbsp;Address &nbsp; &nbsp; &nbsp; </label>
                            <textarea rows="2" cols="40" onclick="next5()" placeholder="Enter your permanent address"></textarea>
                            <br/><br><br>`
                document.getElementById('address').innerHTML = record ;
    }
    
    const next5 = ()=>{
        let record = ` <label>&nbsp;Skills</label> <br>
                            <input type="checkbox" name="skill" value="C">C<br/>
                            <input type="checkbox" name="skill" value="C++">C++<br/>
                            <input type="checkbox" name="skill" value="Java">Java<br/>
                            <input type="checkbox" name="skill" value="Python">Python<br/>
                            <input type="checkbox" name="skill" value="JavaScript">JavaScript<br/>
                            <input type="checkbox" name="skill" value="dotnet">dotnet<br/>
                            <input type="checkbox" name="skill" value="Linux">Linux<br/>   
                            Other Skills : <input type="text" name="othr"  id="other" placeholder="Enter the other skills" onclick="next6()"><br><br>`
                        document.getElementById('skill').innerHTML = record ;
    
    }
    
    const next6 = ()=>{
        let record = `<label>&nbsp; Expected Income</label>
                        <input type="number" name="income" max="10000000" placeholder="Enter Expected Income" required/><br/><br> 
                            <br/>
                        <button type="submit" name="submit">Submit</button><br><br></br>`
                        document.getElementById('income').innerHTML = record ;
    
    }*/
    