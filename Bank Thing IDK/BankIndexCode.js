var invalidText = "One or more Of the parameters enter are invalide please try again";

function ClickedLogin()
{
    var accountEnteredId_Var = document.getElementById("Account_EnteredId_ID").value; //entered account id
    var enteredID = accountEnteredId_Var;
    var accountEnteredUsername_Var = document.getElementById("Account_EnterUsername_EnteredId_ID").value; //entered account username
    var enteredUsername = accountEnteredUsername_Var;
    var accountEnteredPassword_Var = document.getElementById("Account_EnterededPassword_Id").value; //entered account password
    var enteredPassword = accountEnteredPassword_Var;

    var validEnteredId_Var = false;
    var validEnteredUsername_Var = false;
    var validEnteredPassword_Var = false;

    /*
    parseInt(enteredID);
    console.log(typeof enteredID);
    console.log(enteredID);
    
    if(userAccountID.includes(enteredID))
    {
        correctEnteredId_Var = true;
        console.log(correctEnteredId_Var);
    } */


    var getIndexForEnteredID = userAccountID.indexOf(enteredID)
    console.log(getIndexForEnteredID);
    if(getIndexForEnteredID != -1)
    {
        validEnteredId_Var = true;
    }
    if(getIndexForEnteredID == -1)
    {
        validEnteredId_Var = false;
    }
    console.log(validEnteredId_Var);

    var getIndexForUsername = userUsernames.indexOf(enteredUsername);
    console.log(getIndexForUsername);
    if(getIndexForUsername != -1)
    {
        validEnteredUsername_Var = true;
    }
    if(getIndexForUsername == -1)
    {
        validEnteredUsername_Var = false;
    }
    console.log(validEnteredUsername_Var);

    var getIndexForPassword = userPasswords.indexOf(enteredPassword);
    console.log(getIndexForPassword);
    if(getIndexForPassword != -1)
    {
        validEnteredPassword_Var = true;
    }
    if(getIndexForPassword == -1)
    {
        validEnteredPassword_Var = false;
    }
    console.log(validEnteredPassword_Var);
    if(!validEnteredId_Var || !validEnteredUsername_Var || !validEnteredPassword_Var)
    {   
        document.getElementById("InvalidPar_ID").innerHTML = invalidText;
        console.log("oh no oh no");
    }
    if(validEnteredId_Var || validEnteredUsername_Var || validEnteredPassword_Var)
    {
        location.href = "BankLogin.html";
        console.log("yess");
    }
}
