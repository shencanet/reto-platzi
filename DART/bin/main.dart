void main() {
  /*
  for (var i = 0; i < 10; i++) {
    print('hello ${i + 1}');
  }
  print("Programa para saber si esta soleado o no");
  bool estasonando = true;
  print(estasonando);
  if (estasonando) {
    print("Esta soleado");
  } else {
    print("No esta soleado");
  }*/
  print("Programa para saber la edad y estatura");
  int edad = 18;
  double estatura = 1.70;
  print("La edad es ${edad} y la estatura es ${estatura}");
  if (edad >= 18 && estatura >= 1.70) {
    print("Puedes entrar al bar");
  } else {
    print("No puedes entrar al bar");
  }

  //tipos datos
  String pais = "España";
  List <String> paises = ["España", "Mexico", "Colombia"];
  
  print(pais);
  print(paises[0]);
  print(paises.first);
  print(paises.last);



}

