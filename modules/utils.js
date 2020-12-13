exports.replaceTemplate = (data, template) => {
    let output = template.replace(/{%ID%}/g, data.id);
    output = output.replace(/{%IMAGE%}/g, data.image);
    output = output.replace(/{%PRODUCT_NAME%}/g, data.productName);
    output = output.replace(/{%QUANTITY%}/g, data.quantity);
    output = output.replace(/{%PRICE%}/g, data.price);
    output = output.replace(/{%FROM%}/g, data.from);
    output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, data.description);
    output = output.replace(/{%SLUG%}/g, data.slug);

    if (!data.organic) output = output.replace(/{%NOT_ORGANIC%}/, "not-organic");

    return output;
};
