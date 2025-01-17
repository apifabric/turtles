# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Turtle(Base):
    """description: Represents individual turtles in the farm."""
    __tablename__ = 'turtle'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    species = Column(String)
    birth_date = Column(DateTime)
    weight = Column(Float)

class Pond(Base):
    """description: Represents ponds where turtles reside."""
    __tablename__ = 'pond'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    water_type = Column(String)
    size = Column(Float)

class TurtleCareLog(Base):
    """description: Records the care activities administered to turtles."""
    __tablename__ = 'turtle_care_log'

    id = Column(Integer, primary_key=True, autoincrement=True)
    turtle_id = Column(Integer, ForeignKey('turtle.id'), nullable=False)
    date = Column(DateTime, default=datetime.datetime.utcnow)
    activity = Column(String)

class Staff(Base):
    """description: Represents staff members taking care of turtles."""
    __tablename__ = 'staff'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    hire_date = Column(DateTime)
    role = Column(String)

class Habitat(Base):
    """description: Represents habitats designed for specific turtle species."""
    __tablename__ = 'habitat'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    climate = Column(String)
    size = Column(Float)

class FeedingSchedule(Base):
    """description: Schedule that details feeding times for turtles."""
    __tablename__ = 'feeding_schedule'

    id = Column(Integer, primary_key=True, autoincrement=True)
    turtle_id = Column(Integer, ForeignKey('turtle.id'), nullable=False)
    feed_time = Column(DateTime)
    food_type = Column(String)

class HealthCheck(Base):
    """description: Records health checks conducted on turtles."""
    __tablename__ = 'health_check'

    id = Column(Integer, primary_key=True, autoincrement=True)
    turtle_id = Column(Integer, ForeignKey('turtle.id'), nullable=False)
    check_date = Column(DateTime, default=datetime.datetime.utcnow)
    notes = Column(String)

class SupplyInventory(Base):
    """description: Manages inventory of supplies for the farm."""
    __tablename__ = 'supply_inventory'

    id = Column(Integer, primary_key=True, autoincrement=True)
    item_name = Column(String, nullable=False)
    quantity = Column(Integer)
    restock_date = Column(DateTime)

class Visitor(Base):
    """description: Tracks visitors attending the turtle farm."""
    __tablename__ = 'visitor'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    visit_date = Column(DateTime)

class AdoptionApplication(Base):
    """description: Records applications for turtle adoption."""
    __tablename__ = 'adoption_application'

    id = Column(Integer, primary_key=True, autoincrement=True)
    turtle_id = Column(Integer, ForeignKey('turtle.id'))
    applicant_name = Column(String)
    application_date = Column(DateTime)

class ResearchProject(Base):
    """description: Research projects associated with the turtle farm."""
    __tablename__ = 'research_project'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    start_date = Column(DateTime)
    description = Column(String)

class Volunteer(Base):
    """description: Details of volunteers assisting in the farm."""
    __tablename__ = 'volunteer'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    join_date = Column(DateTime)
    task = Column(String)

# Create database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')

# Create all tables
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data
# Turtle
turtle1 = Turtle(name="Leonardo", species="Red-Eared Slider", birth_date=datetime.datetime(2018, 6, 13), weight=5.3)
turtle2 = Turtle(name="Michelangelo", species="Green Sea Turtle", birth_date=datetime.datetime(2017, 3, 21), weight=380.5)

# Pond
pond1 = Pond(name="Main Pond", water_type="Freshwater", size=1500.0)
pond2 = Pond(name="Secondary Pond", water_type="Saltwater", size=1000.0)

# Turtle Care Log
care_log1 = TurtleCareLog(turtle_id=1, activity="Checked weight and measured shell length.")
care_log2 = TurtleCareLog(turtle_id=2, activity="Administered vitamin supplement.")

# Staff
staff1 = Staff(first_name="John", last_name="Doe", hire_date=datetime.datetime(2020, 5, 14), role="Caretaker")
staff2 = Staff(first_name="Jane", last_name="Smith", hire_date=datetime.datetime(2019, 8, 29), role="Veterinarian")

# Habitat
habitat1 = Habitat(name="Tropical Habitat", climate="Tropical", size=2500.0)
habitat2 = Habitat(name="Temperate Habitat", climate="Temperate", size=1800.0)

# Feeding Schedule
feeding1 = FeedingSchedule(turtle_id=1, feed_time=datetime.datetime(2023, 10, 9, 8, 30), food_type="Lettuce and Fish")
feeding2 = FeedingSchedule(turtle_id=2, feed_time=datetime.datetime(2023, 10, 9, 9, 0), food_type="Seaweed")

# Health Check
health_check1 = HealthCheck(turtle_id=1, notes="Healthy, no visible issues.")
health_check2 = HealthCheck(turtle_id=2, notes="Regular checkup, recovering well from recent illness.")

# Supply Inventory
supply1 = SupplyInventory(item_name="Turtle Food", quantity=120, restock_date=datetime.datetime(2023, 10, 3))
supply2 = SupplyInventory(item_name="Medical Supplies", quantity=45, restock_date=datetime.datetime(2023, 10, 5))

# Visitor
visitor1 = Visitor(first_name="Alice", last_name="Johnson", visit_date=datetime.datetime(2023, 9, 15))
visitor2 = Visitor(first_name="Bob", last_name="Williams", visit_date=datetime.datetime(2023, 9, 16))

# Adoption Application
adoption1 = AdoptionApplication(turtle_id=1, applicant_name="Chris Redfield", application_date=datetime.datetime(2023, 9, 20))
adoption2 = AdoptionApplication(turtle_id=2, applicant_name="Jill Valentine", application_date=datetime.datetime(2023, 9, 21))

# Research Project
project1 = ResearchProject(name="Turtle Migration Patterns", start_date=datetime.datetime(2021, 6, 10), description="Studying the migration patterns of sea turtles.")
project2 = ResearchProject(name="Turtle Diet and Health", start_date=datetime.datetime(2019, 11, 5), description="Research on the impact of diet on turtle health.")

# Volunteer
volunteer1 = Volunteer(first_name="Clara", last_name="Lee", join_date=datetime.datetime(2023, 7, 1), task="Assisting with feeding.")
volunteer2 = Volunteer(first_name="Mason", last_name="Taylor", join_date=datetime.datetime(2023, 8, 21), task="Engaging in turtle habitat cleaning.")

# Add all records to the session and commit
session.add_all([turtle1, turtle2, pond1, pond2, care_log1, care_log2, staff1, staff2, habitat1, habitat2, 
                 feeding1, feeding2, health_check1, health_check2, supply1, supply2, visitor1, visitor2, 
                 adoption1, adoption2, project1, project2, volunteer1, volunteer2])

session.commit()

# Close the session
session.close()
