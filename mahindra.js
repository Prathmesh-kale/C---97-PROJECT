

function BackT()
{
    window.location = "tata.html";
}

function logout()
    {
        localStorage.removeItem("user_name");

        window.location.replace("login.html");
    }