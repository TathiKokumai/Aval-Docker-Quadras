CREATE TABLE IF NOT EXISTS quadras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modalidade VARCHAR(100) NOT NULL,
    localizacao VARCHAR(100) NOT NULL
);

INSERT INTO quadras (modalidade, localizacao) VALUES
('Futsal', 'Quadra 1'),
('Basquete', 'Quadra 2'),
('Vôlei', 'Quadra 3');
