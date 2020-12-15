DROP DATABASE IF EXISTS demo_db;

CREATE DATABASE demo_db;

GRANT ALL ON demo_db.* TO 'root'@'localhost';

USE demo_db;

CREATE TABLE stats (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `followers` int NOT NULL,
    `searches` int NOT NULL,
    `other` int NOT NULL,
    `channels` int NOT NULL,
    `total_views` int NOT NULL,
    `engagements` int NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `daily_views` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `total` INT NOT NULL,
    `unique` INT NOT NULL,
    `day` VARCHAR(255) NOT NULL,
    stats_id INT,
    INDEX par_ind (stats_id),
    FOREIGN KEY (stats_id)
        REFERENCES stats(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE theme (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL,
    `background_colors_primary` VARCHAR(20) NOT NULL,
    `background_colors_secondary` VARCHAR(20) NOT NULL,
    `border_colors_primary` VARCHAR(20) NOT NULL,
    `icon_colors_menuItem` VARCHAR(20) NOT NULL,
    `icon_colors_activeMenuItem` VARCHAR(20) NOT NULL,
    `icon_colors_other_a` VARCHAR(20) NOT NULL,
    `icon_colors_other_b` VARCHAR(20) NOT NULL,
    `icon_colors_other_c` VARCHAR(20) NOT NULL,
    `icon_colors_other_d` VARCHAR(20) NOT NULL,
    `icon_colors_other_e` VARCHAR(20) NOT NULL,
    `surface_colors_primary` VARCHAR(20) NOT NULL,
    `surface_boxShadows_primary` VARCHAR(20) NOT NULL,
    `tab_colors_primary` VARCHAR(20) NOT NULL,
    `tab_colors_secondary` VARCHAR(20) NOT NULL,
    `text_colors_primary` VARCHAR(20) NOT NULL,
    `text_colors_secondary` VARCHAR(20) NOT NULL,
    `text_colors_menuItem` VARCHAR(20) NOT NULL,
    `text_colors_other_a` VARCHAR(20) NOT NULL,
    `text_colors_other_b` VARCHAR(20) NOT NULL,
    `text_colors_other_c` VARCHAR(20) NOT NULL,
    `text_colors_other_d` VARCHAR(20) NOT NULL,
    `text_colors_other_e` VARCHAR(20) NOT NULL,
    `text_colors_other_f` VARCHAR(20) NOT NULL,
    `text_colors_other_g` VARCHAR(20) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO stats (id, followers, searches, other, channels, total_views, engagements) VALUES (1, 10, 62, 78, 12, 839, 24);

INSERT INTO daily_views (daily_views.total, daily_views.unique, daily_views.day, daily_views.stats_id) VALUES (12, 11, 'Monday', 1);
INSERT INTO daily_views (daily_views.total, daily_views.unique, daily_views.day, daily_views.stats_id) VALUES (17, 16, 'Tuesday', 1);
INSERT INTO daily_views (daily_views.total, daily_views.unique, daily_views.day, daily_views.stats_id) VALUES (24, 20, 'Wednesday', 1);
INSERT INTO daily_views (daily_views.total, daily_views.unique, daily_views.day, daily_views.stats_id) VALUES (36, 31, 'Thursday', 1);
INSERT INTO daily_views (daily_views.total, daily_views.unique, daily_views.day, daily_views.stats_id) VALUES (9, 7, 'Friday', 1);
INSERT INTO daily_views (daily_views.total, daily_views.unique, daily_views.day, daily_views.stats_id) VALUES (11, 4, 'Saturday', 1);
INSERT INTO daily_views (daily_views.total, daily_views.unique, daily_views.day, daily_views.stats_id) VALUES (31, 27, 'Sunday', 1);