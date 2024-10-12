CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`views` integer DEFAULT 0,
	`likes` integer DEFAULT 0
);
