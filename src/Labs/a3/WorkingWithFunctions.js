import ArrowFunctions from './ArrowFunctions';
import ES5Functions from './ES5Functions';
import ImpliedReturn from './ImpliedReturn';
import FunctionsParenthesisAndParameters from './FunctionParenthesisAndParameters';

function WorkingWithFunctions() {
    return (
        <div className="WorkingWithFunctions">
            <ES5Functions />
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionsParenthesisAndParameters/>
        </div>
    );
}

export default WorkingWithFunctions;
