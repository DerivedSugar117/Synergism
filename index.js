var coins = 10000000

var coinBuilding1Amount = 0
var coinBuilding1Cost = 100
var coinBuilding1CPS = 0
var coinBuilding1Multiplier = 0

var coinBuilding2Amount = 0
var coinBuilding2Cost = 1000
var coinBuilding2CPS = 0
var coinBuilding2Multiplier = 0

var coinBuilding3Amount = 0
var coinBuilding3Cost = 10000
var coinBuilding3CPS = 0
var coinBuilding3Multiplier = 0

var coinBuilding4Amount = 0
var coinBuilding4Cost = 100000
var coinBuilding4CPS = 0
var coinBuilding4Multiplier = 0

var coinBuilding5Amount = 0
var coinBuilding5Cost = 1000000
var coinBuilding5CPS = 0
var coinBuilding5Multiplier = 0


var acceleratorAmount = 0
var acceleratorCost = 100000
var acceleratorPOW = 1

var multiplierAmount = 0
var multiplierCost = 1000000
var multiplierPOW = 1


var coinUpgrade1Cost = 1000000
var coinUpgrade1Multiplier = 1


function buyCoinBuilding1()
{
    if (coins >= coinBuilding1Cost)
    {
        coins-= coinBuilding1Cost
        coinBuilding1Cost*=1.15
        coinBuilding1Amount++
        coinBuilding1CPS+= 10
        coinBuilding1Multiplier++
        updateNumbers()
    }
}

function coinBuilding1Generator()
{
    coins = coins + coinBuilding1Multiplier
    updateNumbers()
}

setInterval(function()
{
    if (coinBuilding1Amount != 0)
    {
        coinBuilding1Generator()
    }
    updateNumbers()
},100)


function buyCoinBuilding2()
{
    if (coins >= coinBuilding2Cost)
    {
        coins-= coinBuilding2Cost
        coinBuilding2Cost*=1.15
        coinBuilding2Amount++
        coinBuilding2CPS+= 100
        coinBuilding2Multiplier+= 10
    }
}

function coinBuilding2Generator()
{
    coins = coins + coinBuilding2Multiplier
    updateNumbers()
}

setInterval(function()
{
    if (coinBuilding2Amount != 0)
    {
        coinBuilding2Generator()
    }
    updateNumbers()
},100)

function buyCoinBuilding3()
{
    if (coins >= coinBuilding3Cost)
    {
        coins-= coinBuilding3Cost
        coinBuilding3Cost*=1.15
        coinBuilding3Amount++
        coinBuilding3CPS+= 1000
        coinBuilding3Multiplier+= 100
    }
}

function coinBuilding3Generator()
{
    coins = coins + coinBuilding3Multiplier
    updateNumbers()
}

setInterval(function()
{
    if (coinBuilding3Amount != 0)
    {
        coinBuilding3Generator()
    }
    updateNumbers()
},100)

function buyCoinBuilding4()
{
    if (coins >= coinBuilding4Cost)
    {
        coins-= coinBuilding4Cost
        coinBuilding4Cost*=1.15
        coinBuilding4Amount++
        coinBuilding4CPS+= 10000
        coinBuilding4Multiplier+= 1000
    }
}

function coinBuilding4Generator()
{
    coins = coins + coinBuilding4Multiplier
    updateNumbers()
}

setInterval(function()
{
    if (coinBuilding4Amount != 0)
    {
        coinBuilding4Generator()
    }
    updateNumbers()
},100)

function buyCoinBuilding5()
{
    if (coins >= coinBuilding5Cost)
    {
        coins-= coinBuilding5Cost
        coinBuilding5Cost*=1.15
        coinBuilding5Amount++
        coinBuilding5CPS+= 100000
        coinBuilding5Multiplier+= 10000
    }
}

function coinBuilding5Generator()
{
    coins = coins + coinBuilding5Multiplier
    updateNumbers()
}

setInterval(function()
{
    if (coinBuilding5Amount != 0)
    {
        coinBuilding5Generator()
    }
    updateNumbers()
},100)


function buyAccelerator()
{
    if (coins >= acceleratorCost)
    {
        coins-= acceleratorCost
        acceleratorCost*=100
        acceleratorAmount++
        acceleratorPOW*=1.3

        coinBuilding1Multiplier = coinBuilding1Multiplier * acceleratorPOW
        coinBuilding2Multiplier = coinBuilding2Multiplier * acceleratorPOW
        coinBuilding3Multiplier = coinBuilding3Multiplier * acceleratorPOW
        coinBuilding4Multiplier = coinBuilding4Multiplier * acceleratorPOW
        coinBuilding5Multiplier = coinBuilding5Multiplier * acceleratorPOW
        updateNumbers()
    }
}

function buyMultiplier()
{
    if (coins >= multiplierCost)
    {
        coins-= multiplierCost
        multiplierCost*=1000
        multiplierAmount++
        multiplierPOW*=2

        coinBuilding1Multiplier*= multiplierPOW
        coinBuilding2Multiplier*= multiplierPOW
        coinBuilding3Multiplier*= multiplierPOW
        coinBuilding4Multiplier*= multiplierPOW
        coinBuilding5Multiplier*= multiplierPOW
        updateNumbers()
    }
}


function buyCoinUpgrade1()
{
    if (coins >= coinUpgrade1Cost) {
        coins-= coinUpgrade1Cost
        document.getElementById("coinUpgrade1").style.backgroundColor = "lime"
        document.getElementById("coinUpgrade1TooltipCost").innerText = "Bought"
        coinUpgrade1Multiplier = 1000000

        coinBuilding1Multiplier*=coinUpgrade1Multiplier
    }
}


function showUpgradesTab()
{
    document.getElementById("upgradesContainer").style.display = "flex"
    document.getElementById("buildingsContainer").style.display = "none"
}

function showBuildingsTab()
{
    document.getElementById("buildingsContainer").style.display = "flex"
    document.getElementById("upgradesContainer").style.display = "none"
}

function updateNumbers()
{
    let Coins = coins.toLocaleString(undefined, {maximumFractionDigits: 0})
    document.getElementById("coinAmount").innerText = Coins

    document.getElementById("coinBuilding1Cost").innerText = Math.round(coinBuilding1Cost)
    document.getElementById("coinBuilding1AMOUNT").innerText = Math.round(coinBuilding1Amount)
    document.getElementById("coinBuilding1CPS").innerText = Math.round(coinBuilding1CPS * acceleratorPOW * multiplierPOW * coinUpgrade1Multiplier)

    document.getElementById("coinBuilding2Cost").innerText = Math.round(coinBuilding2Cost)
    document.getElementById("coinBuilding2AMOUNT").innerText = Math.round(coinBuilding2Amount)
    document.getElementById("coinBuilding2CPS").innerText = Math.round(coinBuilding2CPS * acceleratorPOW * multiplierPOW)

    document.getElementById("coinBuilding3Cost").innerText = Math.round(coinBuilding3Cost)
    document.getElementById("coinBuilding3AMOUNT").innerText = Math.round(coinBuilding3Amount)
    document.getElementById("coinBuilding3CPS").innerText = Math.round(coinBuilding3CPS * acceleratorPOW * multiplierPOW)
    
    document.getElementById("coinBuilding4Cost").innerText = Math.round(coinBuilding4Cost)
    document.getElementById("coinBuilding4AMOUNT").innerText = Math.round(coinBuilding4Amount)
    document.getElementById("coinBuilding4CPS").innerText = Math.round(coinBuilding4CPS * acceleratorPOW * multiplierPOW)

    document.getElementById("coinBuilding5Cost").innerText = Math.round(coinBuilding5Cost)
    document.getElementById("coinBuilding5AMOUNT").innerText = Math.round(coinBuilding5Amount)
    document.getElementById("coinBuilding5CPS").innerText = Math.round(coinBuilding5CPS * acceleratorPOW * multiplierPOW)


    document.getElementById("acceleratorCost").innerText = Math.round(acceleratorCost)
    document.getElementById("acceleratorAMOUNT").innerText = Math.round(acceleratorAmount)
    document.getElementById("acceleratorPOW").innerText = Math.round(acceleratorPOW * 10) / 10

    document.getElementById("multiplierCost").innerText = Math.round(multiplierCost)
    document.getElementById("multiplierAMOUNT").innerText = Math.round(multiplierAmount)
    document.getElementById("multiplierPOW").innerText = Math.round(multiplierPOW)
}