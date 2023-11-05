var instructions = []
var ingredients = []
var nutrition = []
var dataObj =     {
    "img": "",
    "name": "",
    "addition": "",
    "desc": "",
    "tags": [],
    "allergens": [],
    "time": "35",
    "prep_time": "5",
    "difficulty": "easy",
    "ingredients": [],
    "nutrition": [],
    "instructions": [],
    "utensils": []
   
}
jQuery('[data-test-id="recipe-description"]').each(function(index, element) {

    const img = jQuery('[data-test-id="recipe-hero-image"]').find('img').attr('src');
    const h1 = jQuery(element).find('h1').text();
    const h2 = jQuery(element).find('h2').text();
    const desc = jQuery(element).find('[data-test-id="description-body-title"]').find('p').text();
    var tags = jQuery('[data-test-id="recipe-description-tag"]').find('span').text().split("•")
    var allergens = jQuery('[data-test-id="recipe-description-allergen"]').find('span').text().split("•")
    var utensils = jQuery('[data-test-id="utensils-list-item"]').find('span').text().split("•")

    dataObj["img"] = img
    dataObj["name"] = h1
    dataObj["addition"] = h2
    dataObj["desc"] = desc
    dataObj["tags"] = tags
    dataObj["allergens"] = allergens
    dataObj["utensils"] = utensils
    
});
jQuery('[data-test-id="instruction-step"]').each(function(index, element) {


    const img = jQuery(element).find('img').attr('src');
    const info = jQuery(element).find('span').text();
    instructions.push({
        "info": info,
        "img": img
    })
    
    
});
jQuery('[data-test-id="nutrition-step"]').each(function(index, element) {
    let obj = {
        "name": "",
        "value": ""
    }
    jQuery(element).find('span').each(function(i, el) {
        var text = jQuery(el).text()
        if (i == 0) {
            obj["name"] = text
        }
        else{
            obj["value"] = text
        }
    })
    nutrition.push(obj)
});

jQuery('[data-test-id="ingredient-item-shipped"]').each(function(index, element) {

    const img = jQuery(element).find('img').attr('src');
    let obj = {
        "name": "",
        "img": img,
        "vol": ""
    }
    jQuery(element).find('[data-zest="hellofresh"]').find('p').each(function(i, el) {

        const text = jQuery(el).text();
        if (i == 0) {
            obj["vol"] = text
        }
        if (i == 1) {
            obj["name"] = text
            
        }
    })
    ingredients.push(obj)
});


dataObj["ingredients"] = ingredients
dataObj["instructions"] = instructions
dataObj["nutrition"] = nutrition

console.log(dataObj)
  