<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="icon" type="image/x-icon" href="https://i.pinimg.com/originals/a8/01/a2/a801a25a57cba6b4e787ee53e16c322e.png">
    <title>Zachody v okolí</title>
</head>
<body>
    <main>
        <div id="map"></div>
        <div class="search-bar">
            <H1>Zachody v okolí</H1>
            <div class="search-bar-box">
                <h1>test</h1>
            </div>
            <div>
                <form>
                    <label for="popis">Popis</label><br>
                    <input type="text" name="popis" id="popis"><br>
                    <label for="iszdarma">Dostupnost: </label><br>
                    <input type="radio" id="zdarma" value="Zdarma" name="radio">
                    <label for="zdarma">Zdarma</label><br>
                    <input type="radio" id="placeny" value="Placeny" name="radio">
                    <label for="placeny">Placeny</label><br>
                    <label for="kod">PIN:</label>
                    <input type="text"  name="kod" maxlength="4"  id="kod" pattern="\d{4}" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  required/>
                </form>
            </div>
        </div>
    </main>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVly2hocBKgl_BpElxCu9oVanhBbHedH0&callback=initMap&v=weekly"
      defer
    ></script>
</body>
</html>