import Decoration from '../vectors/Decoration'

const Hr = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ display: "grid", justifyContent: "center", alignContent: "center", margin: "4rem" }}>
            <Decoration />
            {children}
        </div>
    );
}

export default Hr;