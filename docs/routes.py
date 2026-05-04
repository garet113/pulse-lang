from fastapi import APIRouter
import random

router = APIRouter()

state = {"comfort":0.5,"mood":0.4,"arousal":0.3}

@router.get("/signals")
def get_signals():
    for k in state:
        state[k]+=random.uniform(-0.05,0.05)
        state[k]=max(0,min(1,state[k]))
    return state
