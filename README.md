Убедиться что установлен python, postgresql, node.js
Открыть папку backend в терминале
Установить зависимости согласно пз
pip install fastapi[all] sqlalchemy psycopg2 alembic
Создать базу данных task_manager в PostgreSQL.
Скрипт для создания таблиц если не используете миграции
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    status VARCHAR(50) CHECK (status IN ('new', 'in_progress', 'completed')) DEFAULT 'new',
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
);

Далее запускаем сервер
uvicorn main:app --reload --host 127.0.0.1 --port 8080

переходим в папку фронтенда
выполняем npm install и npm run dev

Открыть браузер и перейти по адресу:
http://localhost:5173
