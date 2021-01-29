CREATE TABLE IF NOT EXISTS bandnames (
    id SMALLSERIAL NOT NULL,
    bandname VARCHAR ( 50 ) UNIQUE NOT NULL,
    cre_dt TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cre_user VARCHAR ( 25 ) NOT NULL,
    edit_dt TIMESTAMPTZ,
    edit_user VARCHAR ( 25 ),
    edited SMALLINT NOT NULL DEFAULT 1,
    CONSTRAINT bandname_id PRIMARY KEY (id),
    CONSTRAINT unique_bandname UNIQUE (bandname)
)


TABLESPACE pg_default;

-- ALTER TABLE public.bandnames
--     OWNER to USER_NAME;

INSERT INTO bandnames (bandname, cre_dt, cre_user, edited)
VALUES ('Toehider', sysdate, 'init', 1);
INSERT INTO bandnames (bandname, cre_dt, cre_user, edited)
VALUES ('Rush', sysdate, 'init', 1);
INSERT INTO bandnames (bandname, cre_dt, cre_user, edited)
VALUES ('Evergrey', sysdate, 'init', 1);
INSERT INTO bandnames (bandname, cre_dt, cre_user, edited)
VALUES ('Symphony X', sysdate, 'init', 1);
INSERT INTO bandnames (bandname, cre_dt, cre_user, edited)
VALUES ('Ayreon', sysdate, 'init', 1);
INSERT INTO bandnames (bandname, cre_dt, cre_user, edited)
VALUES ('Pain of Salvation', sysdate, 'init', 1);
INSERT INTO bandnames (bandname, cre_dt, cre_user, edited)
VALUES ('Dream Theater', sysdate, 'init', 1);