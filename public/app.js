let city = document.querySelector("#citySelect");

const oneBtn = document.querySelector("#one");
if (oneBtn) {
    oneBtn.addEventListener("click", () => {
        window.location.href = "/prediction";
    });
}

const signinBtn = document.querySelector("#signin");
if (signinBtn) {
    signinBtn.addEventListener("click", () => {
        window.location.href = "/login";
    });
}

const signupBtn = document.querySelector("#signup");
if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        window.location.href = "/signup";
    });
}

const signoutBtn = document.querySelector("#signout");
if (signoutBtn) {
    signoutBtn.addEventListener("click", () => {
        window.location.href = "/signout";
    });
}

let butt = document.querySelector(".search");
if (butt) {
    butt.addEventListener("click", () => {
        let select = document.querySelector("#select");
        if (city.value == "0") {
            alert("please fill the location field");
            return;
        }
        if (select.value == "") {
            select.style = " border:2px solid red;";
            alert("please fill the input  field");
            return;
        }
        window.location.href = `/list/${city.value}/${select.value}`;
    });
}

const twoBtn = document.querySelector("#two");
if (twoBtn) {
    twoBtn.addEventListener("click", () => {
        if (city.value == "0") {
            city.style = " border:3px solid red;";
            alert("please fill the location field");
            return;
        }
        window.location.href = `/list/${city.value}`;
    });
}

const threeBtn = document.querySelector("#three");
if (threeBtn) {
    threeBtn.addEventListener("click", () => {
        window.location.href = "/booking";
    });
}
const fourBtn = document.querySelector("#four");
if (fourBtn) {
    fourBtn.addEventListener("click", () => {
        window.location.href = "/drugs";
    });
}

let spec = document.querySelectorAll(".spec");
if (spec) {
    for (let spe of spec) {
        spe.addEventListener("click", () => {
            if (city.value == "0") {
                alert("please fill the location field");
                return;
            }
            let p = spe.querySelector("p");
            window.location.href = `/list/${city.value}/${p.innerText}`;
        });
    }
}

function handleLocationChange() {
    const selected = document.getElementById("citySelect").value;
    if (selected === "current") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const apiKey = "941ea0480ce5451caa6b6b69508bf541";
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            const components = data.results[0].components;
                            const city = components.city || components.town || components.village || 'Unknown';
                            const state = components.state || 'Unknown';
                            alert(`City: ${city}\nState: ${state}`);
                            document.getElementById("citySelect").value = `${city}`;
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert("Error fetching location info.");
                        });
                }
            );
        } else {
            alert("Geolocation not supported by your browser.");
        }
    } else {
        alert("You selected: " + selected);
    }
}
