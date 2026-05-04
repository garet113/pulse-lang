from fastapi import FastAPI
from app.routes import router

app = FastAPI(title="Pulse Studio API")
app.include_router(router)
