CREATE TABLE "users" (
	"id"	INTEGER,
	"email"	TEXT UNIQUE,
	"name"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "projects" (
	"id"	INTEGER,
	"project_name"	TEXT,
	"project_description"	TEXT,
	"project_notes"	TEXT,
	"project_attachment"	BLOB,
	"user_access_id"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("user_access_id") REFERENCES "users"("id")
)