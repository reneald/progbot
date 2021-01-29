--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-1.pgdg16.04+1)
-- Dumped by pg_dump version 13.1

-- Started on 2021-01-29 15:15:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE dc06tkvadtulp9;
--
-- TOC entry 3842 (class 1262 OID 13562341)
-- Name: dc06tkvadtulp9; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE dc06tkvadtulp9 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect dc06tkvadtulp9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 14148018)
-- Name: bandnames; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bandnames (
    id smallint NOT NULL,
    bandname character varying(50) NOT NULL,
    cre_dt timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    cre_user character varying(25) NOT NULL,
    edit_dt timestamp with time zone,
    edit_user character varying(25),
    edited smallint DEFAULT 1 NOT NULL
);


--
-- TOC entry 202 (class 1259 OID 14148016)
-- Name: bandnames_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bandnames_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3843 (class 0 OID 0)
-- Dependencies: 202
-- Name: bandnames_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.bandnames_id_seq OWNED BY public.bandnames.id;


--
-- TOC entry 3703 (class 2604 OID 14148021)
-- Name: bandnames id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bandnames ALTER COLUMN id SET DEFAULT nextval('public.bandnames_id_seq'::regclass);


--
-- TOC entry 3707 (class 2606 OID 14148025)
-- Name: bandnames bandname_id; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bandnames
    ADD CONSTRAINT bandname_id PRIMARY KEY (id);


--
-- TOC entry 3709 (class 2606 OID 14148027)
-- Name: bandnames unique_bandname; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bandnames
    ADD CONSTRAINT unique_bandname UNIQUE (bandname);


--
-- TOC entry 3710 (class 2620 OID 14148041)
-- Name: bandnames update_edits; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_edits BEFORE UPDATE OF bandname ON public.bandnames FOR EACH ROW EXECUTE FUNCTION public.edited();


--
-- TOC entry 3844 (class 0 OID 0)
-- Dependencies: 3710
-- Name: TRIGGER update_edits ON bandnames; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TRIGGER update_edits ON public.bandnames IS 'Triggers update function each time a row is edited';


-- Completed on 2021-01-29 15:15:29

--
-- PostgreSQL database dump complete
--

