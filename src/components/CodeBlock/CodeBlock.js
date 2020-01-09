import React, {useEffect} from "react";
import styled from "styled-components";

const Pre = styled.pre`
  border-radius: 8px;
  padding: 8px;
`;

const CodeBlock = ({code}) => {
    useEffect(() => {
        window.PR.prettyPrint();
    }, []);
    return (
        <Pre className="prettyprint">
            <code>
                {code}
            </code>
        </Pre>
    );
};

export default CodeBlock;