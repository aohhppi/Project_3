import warnings
warnings.filterwarnings('ignore')
# Import Dependencies
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func,Float
from flask import Flask, jsonify,render_template
import datetime as dt
import sqlite3

engine = create_engine("sqlite:///ga.sqlite")
Base=automap_base()
Base.classes.keys()
# reflect the tables
Base.prepare(engine,reflect=True)
# Measurement=Base.classes.measurement
# Station=Base.classes.station
# # Flask Setup
#################################################
app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    """List all available api routes."""
    return render_template("/index.html")
    # return (
    #     f"<b>Welcome to GA immigration Data</b><br/>"
    #     f"Available Routes:<br/>"
    #     f"/api/getresult1<br/>"
        
    # )

@app.route('/search_tool')
def search_tool():
    return render_template('/search_tool.html')

@app.route('/map')
def map():
    return render_template('/map.html')

@app.route("/api/getresult1")
def get_result1( ):
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    # results = engine.execute('select * from "ga_immigrants"').fetchall()
    rows=engine.execute('select * from "ga_immigrants"').fetchall()
    # for row in rows:
    #     print(row)
    session.close()

    # Convert list of tuples into normal list
    results= []
    for row in rows:
        t=(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8])
        results.append(t)
    #     prcp_dict["prcp"] = prc
    

    return jsonify(results)

# create another route 
# render template on blank page
## in blank page, include link to js file


   
if __name__ == '__main__':
    app.run(debug=True)