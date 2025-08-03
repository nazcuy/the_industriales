import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './ItemListContainer.scss';

const ItemListContainer = ({ saludo }) => {
    return (
        <Container className="item-list-container py-5">
        <div className="welcome-card p-4 p-md-5 rounded-4 shadow-sm">
            <h1 className="display-5 fw-bold mb-4">{saludo}</h1>
            <p className="lead mb-4">
            Hacemos serigrafía y sublimación
            </p>
            <div className="d-flex gap-3">
            <Button variant="primary" size="lg">
                Ver catálogo
            </Button>
            <Button variant="outline-secondary" size="lg">
                Ofertas especiales
            </Button>
            </div>
        </div>
        </Container>
    );
    };

export default ItemListContainer;