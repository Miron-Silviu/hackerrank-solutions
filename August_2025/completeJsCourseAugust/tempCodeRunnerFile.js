showDetails = function (name) {
  console.log(this.name);
};

const obj = {
  name: 'Jhon',
  show: showDetails,
};

obj.show();
showDetails.call(obj);