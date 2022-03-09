function temperaturaSP(){ 
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-22';
    let lon = '-49';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#citySP').innerHTML = (dados.name)
        sTemp = parseInt(dados.main.temp)
        tempSP.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaSP();

function temperaturaRJ(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-22.9028';
    let lon = '-43.2075';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityRJ').innerHTML = (dados.name)
        sTemp = parseInt(dados.main.temp)
        tempRJ.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaRJ();

function temperaturaMG(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-19.9208';
    let lon = '-43.9378';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityMG').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempMG.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaMG();

function temperaturaAC(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-9.9747';
    let lon = '-67.81';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityAC').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempAC.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaAC();

function temperaturaAL(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-9.6658';
    let lon = '-35.7353';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityAL').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempAL.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaAL();

function temperaturaAP(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '0.0389';
    let lon = '-51.0664';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityAP').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempAP.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaAP();

function temperaturaAM(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-3.1019';
    let lon = '-60.025';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityAM').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempAM.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaAM();

function temperaturaBA(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-12.9711';
    let lon = '-38.5108';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityBA').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempBA.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaBA();

function temperaturaCE(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-3.7227';
    let lon = '-38.5247';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityCE').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempCE.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaCE();

function temperaturaDF(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-15.7797';
    let lon = '-47.9297';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityDF').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempDF.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaDF();

function temperaturaES(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-20.3194';
    let lon = '-40.3378';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityES').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempES.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaES();

function temperaturaGO(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-16.6786';
    let lon = '-49.2539';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityGO').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempGO.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaGO();

function temperaturaMA(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-2.5297';
    let lon = '-44.3028';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityMA').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempMA.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaMA();

function temperaturaMT(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-15.5961';
    let lon = '-56.0967';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityMT').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempMT.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaMT();

function temperaturaMS(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-20.4428';
    let lon = '-54.6464';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityMS').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempMS.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaMS();

function temperaturaPA(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-1.4558';
    let lon = '-48.5044';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityPA').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempPA.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaPA();

function temperaturaPB(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-7.115';
    let lon = '-34.8631';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityPB').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempPB.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaPB();

function temperaturaPR(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-25.504';
    let lon = '-49.2908';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityPR').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempPR.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaPR();

function temperaturaPE(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-8.0539';
    let lon = '-34.8811';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityPE').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempPE.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaPE();

function temperaturaPI(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-5.0892';
    let lon = '-42.8019';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityPI').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempPI.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaPI();

function temperaturaRN(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-5.795';
    let lon = '-35.2094';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityRN').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempRN.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaRN();

function temperaturaRS(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-30.0331';
    let lon = '-51.23';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;


    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityRS').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempRS.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaRS();

function temperaturaRO(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-8.7619';
    let lon = '-63.9039';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;

    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityRO').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempRO.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaRO();

function temperaturaRR(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '2.8197';
    let lon = '-60.6733';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;

    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityRR').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempRR.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaRR();

function temperaturaSC(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-27.6146';
    let lon = '-48.5012';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;

    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#citySC').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempSC.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaSC();

function temperaturaSE(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-10.9111';
    let lon = '-37.07171';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;

    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#citySE').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempSE.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaSE();

function temperaturaTO(){
    let chaveAPI = '0f1f1097eae724dd85c9526388f34700';
    let lat = '-10.2128';
    let lon = '-48.3603';
    let unidade = 'metric'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidade}&APPID=${chaveAPI}`;

    console.log(url)

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarTemperatura(data);
        })
    });

    function mostrarTemperatura(dados){
        document.querySelector('#cityTO').innerHTML = (dados.name);
        sTemp = parseInt(dados.main.temp)
        tempTO.innerHTML = 'Temperatura atual: ' + sTemp + ' ºC';
    };
    
} temperaturaTO();