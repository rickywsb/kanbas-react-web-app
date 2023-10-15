import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoop from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";

function WorkingWithArrays(){
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

     // Logging to the console
     console.log("Working with Arrays:");
     console.log("functionScoped =", functionScoped);
     console.log("blockScoped =", blockScoped);
     console.log("constant1 =", constant1);
     console.log("numberArray1 =", numberArray1);
     console.log("stringArray1 =", stringArray1);
     console.log("variableArray1 =", variableArray1);

    return (
        <div>
            <h3>Working with Arrays</h3>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />

            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoop />
            <MapFunction />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
        </div>
    );

}
export default WorkingWithArrays;
