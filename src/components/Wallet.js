import Mission from "./Mission";

const Wallet = (props) => {

    return (
        <>
            {`${props.player}'s Wallet`}
            <br />
            <Mission text={"Mission 1"}/>
            <Mission text={"Mission 2"} />
            <Mission text={"Mission 3"}/>
            <Mission text={"Mission 4"}/>
            <Mission text={"Mission 5"}/>
            <Mission text={"Mission 6"}/>
        </>
    );
}

export default Wallet;
