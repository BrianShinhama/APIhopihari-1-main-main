DELIMITER $$
drop trigger if exists  after_insert_users_has_rides;

CREATE TRIGGER after_insert_users_has_rides
AFTER INSERT ON hopi_hari_db.users_has_rides
FOR EACH ROW
BEGIN

DECLARE wait_time INT;
DECLARE users_has_rides_count INT;
DECLARE total_wait INT;

SELECT tempo_espera INTO wait_time
FROM rides
WHERE id = NEW.atracoes_id;

SELeCT COUNT(*) INTO users_has_rides_count
FROM hopi_hari_db.users_has_rides
WHERE atracoes_id = NEW.atracoes_id;

SET total_wait = wait_time = users_has_rides_count;
INSERT INTO notifications (descriptions, atracoes_id, users_id, status)
VALUES (CONCAT(total_wait_time, "minutos de espera para o brinquedo"), NEW.atracoes_id, NEW.users_id, TRUE);

end$$

DELIMITER ;




SELECT * FROM rides; #8
SELECT * FROM hopi_hari_db.lines;

INSERT INTO hopi_hari_db.lines (id.ride, id_user) VALUES (8, 5);

SELECT tempo_espera FROM rides WHERE id = 8; # 5 min
SELECT COUNT(id_user) FROM hopi_hari_db.lines WHERE id_ride = 8; # 1 pessoa

SELECT
(SELECT tempo_espera FROM rides WHERE id = 8) *
(SELECT COUNT(id_user) FROM hopi_hari_db.lines WHERE id_ride = 8)
AS total_wait_time;

DESC notifications;
INSERT INTO notifications (descriptions, id_ride, id_user, status)
VALUES (CONCAT(total_wait_time, "minutos de espera para o brinquedo"), 8, 5, TRUE);                       







INSERT INTO hopi_hari_db.users_has_rides (users_id , atracoes_id)
VALUES
(2,8),
(2,3);

INSERT iNTO hopi_hari_db.rides (name, tempo_espera,  status, area)
VALUES
("montanha", "10", "movimentado", "Kaminda"),
("roletarussa", "10", "pouco movimentado", "wildwest");

INSERT INTO hopi_hari_db.users (first_name, last_name, email, password, birth_date, phone)
VALUES 
("Zinho", "Bola", "zinhobola@gmail.com", "123", "2001-09-11", "12345678"),
("Roger", "calvo", "calvo@gmail.com", "123", "2000-09-09", "12341434");