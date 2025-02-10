
function setMap() {
	let mapContainers = document.querySelectorAll(".map");

	if (mapContainers.length === 0) return;
	// const script = document.createElement("script");
	// script.src = "../local/templates/zaryadyehall/assets/libs/buildYaMaps/script.js";
	// document.body.append(script);
	try {
		ymaps.ready(() => {
			for (let mapContainer of document.querySelectorAll(".map")) {
				let id = mapContainer.getAttribute("id"),
					data = mapContainer.dataset,
					mapCoord = JSON.parse(data.coord),
					mapZoom = data.zoom,
					mapTitle = 'data.title',
					// mapCoord2 = JSON.parse(data.coord2),
					// mapTitle2 = data.title2,
					mapCenter = JSON.parse(data.center),
					map = new ymaps.Map(id, {
						center: mapCenter,
						zoom: mapZoom,
						controls: ["smallMapDefaultSet"],
					}),
					pin = new ymaps.Placemark(
						mapCoord,
						{
							hintContent: mapTitle,
						},
						{
							iconLayout: "default#image",
							iconImageHref: "../../img/placemark.png",
							iconImageSize: [mapContainer.getBoundingClientRect().width * 0.14, mapContainer.getBoundingClientRect().width * 0.186],
							iconImageOffset: [-40, -54]
						}
					);
				// if (mapCoord2) {
				// 	pin2 = new ymaps.Placemark(
				// 		mapCoord2,
				// 		{
				// 			hintContent: mapTitle2,
				// 		},
				// 		{
				// 			iconLayout: "default#image",
				// 			iconImageHref: "../img/placemark.png",
				// 		}
				// 	);
				// 	map.geoObjects.add(pin2);
				// }

				map.behaviors.disable(["scrollZoom"]);
				map.geoObjects.add(pin);
				setMapCenter();
				function setMapCenter() {
					map.setCenter(mapCenter);
					console.log(mapContainer.getBoundingClientRect().width);
					pin.options.set("iconImageSize", [mapContainer.getBoundingClientRect().width * 0.14, mapContainer.getBoundingClientRect().width * 0.186])
					pin.options.set("iconImageOffset", [-mapContainer.getBoundingClientRect().width * 0.14 / 2, -mapContainer.getBoundingClientRect().width * 0.186 / 2])
					if (!mapContainer.closest(".contacts")) {
						const centerCoord = map.getGlobalPixelCenter();

						// смещаем центр карты

						if (window.innerWidth > 1200) {
							// centerCoord[0] -= 350;
							centerCoord[1] += 0;
						} else if (window.innerWidth > 991) {
							// centerCoord[0] -= 250;
							centerCoord[1] += 0;
						} else {
							centerCoord[0] -= 0;
							centerCoord[1] += 0;
						}


						map.setGlobalPixelCenter(centerCoord);
					}

				}

				window.addEventListener("resize", setMapCenter);
			}
		});
	} catch (e) {
		console.log("Yandex Map is not initiated");
	}
}

async function loadScript(src, func = false) {
	const script = document.createElement("script");
	script.src = src;
	document.body.append(script);
	if (func) script.onload = () => func();
}
document.addEventListener('DOMContentLoaded', function () {
	loadScript(window.location.protocol + "//api-maps.yandex.ru/2.1.79/?lang=ru_RU", setMap);
})
