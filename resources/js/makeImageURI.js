module.exports = async function makeImageURI(imageUrl){
    const res = await fetch(imageUrl);

    const blob = await res.blob();

    return Promise.resolve(URL.createObjectURL(blob));
}