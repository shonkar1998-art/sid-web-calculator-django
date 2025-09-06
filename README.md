# Django Calculator

This is a simple calculator web project using Python (Django) + HTML + CSS + JavaScript.

## Run locally (like a 5th grader)

1. Open the project folder in VS Code.
2. Open Terminal in VS Code (press `Ctrl + ``).
3. Create and turn on the virtual environment:

Windows:
```
python -m venv .venv
.venv\Scripts\activate
```

Mac / Linux:
```
python3 -m venv .venv
source .venv/bin/activate
```

4. Install requirements:
```
pip install -r requirements.txt
```

5. Make the database:
```
python manage.py migrate
```

6. Start the server:
```
python manage.py runserver
```

7. Open your browser and go to:
```
http://127.0.0.1:8000
```

Now you will see your calculator!

## To publish online (free options)
- Use Render.com (free tier) or PythonAnywhere.
- For a static-only version (no Python), you can host on GitHub Pages by using only the `index.html`, `style.css`, and `script.js` files.

