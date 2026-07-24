import styled from "styled-components";

const StyledBtn = styled.button`
    font-size: medium;
    background-color: #1e293b;
    color: azure;
    border:2px solid #194ca4;
    border-radius: 8px;
    padding: 10px;
`;

function Landing() {
    return (
        <div>
            <h1>landing page</h1>

            <StyledBtn>button</StyledBtn>
        </div>
    )
}

export default Landing
