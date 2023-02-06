import fetch from 'node-fetch';

let referal = "PUT YOUR REFERRAL CODE HERE"; //Example: 63740970227402
//get first 11 numbers in referal
let pid = referal.substring(0, 11);
//get last 3 numbers in referal
let pareaid = referal.substring(11, 14);

async function main() {
    while(true) {
        await fetch(`https://moneyeasily-xsx.top/${referal}`, {
          method: 'GET'
        });
        console.log("Sent Click!");

        let fullname = generate("FullName");
        let username = generate("Username");
        let email = generate("Email") + "@gmail.com";
        let password = generate("Password");

        const params = new URLSearchParams();
        params.append('fullname', fullname);
        params.append('username', username);
        params.append('email', email);
        params.append('password', password);
    
        const response = await fetch('https://moneyeasily-xsx.top/api.php?act=register', {
            method: 'post',
            body: params,
            headers: {
                cookie: `dldomain=moneyeasily-xsx.top; pid=${pid}; pareaid=${pareaid}; firstreg=0`
            },
        });
        const data = await response.json();
    
        if(data.code == 1) {
            console.log(`Account created successfully!\n${params}\n`);
        }
        else {
            console.log(`${data.message}`);
        }
    }
}

main();

//Other Functions
function generate(option) {
    var length = 8,
    charset = "",
    retVal = "";

    switch(option) {
        case "FullName":
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;

        case "Username":
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_";
            break;

        case "Email":
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;

        case "Password":
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-=+!@#$%^&*()_";
            break;
        default:
            console.log(`Sorry but ${option} is not a valid option.`);
    }

    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
