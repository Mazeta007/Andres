var comida=prompt("Que comida te gusta mas:pastel, pizza o helado?");
switch(comida){
    case "pastel":
        document.write("Me gusta el pastel");
        break;
        case"pizza":
        document.write("Me gusta la pizza");
        break;
        case"helado":
        document.write("Me gusta el helado");
        break;
        default:
            document.write("Elige bien!!");
            break;
}