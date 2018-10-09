import React from "react";
import { Container, Footer } from "mdbreact";
import "./Footer.css";

class FooterPage extends React.Component {
    render() {
        return (
            <Footer>
                <div className="footer-copyright text-center py-4">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        PetSitter
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;