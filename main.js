function edad(e1, e2) {
  if (e1 == e2) {
    return console.log("tienen la misma edad :" + e1);
  }
  if (e1 > e2 && e1 != e2) {
    let restaEdad = e1 - e2;
    console.log("el hermano mayor tiene " + e1);
    console.log("el hermano menor tiene " + e2);
    console.log("se llevan por " + restaEdad);
  } else {
    restaEdad = e2 - e1;
    console.log("el hermano mayor tiene " + e2);
    console.log("el hermano menor tiene " + e1);
    console.log("se llevan por " + restaEdad);
  }
}
