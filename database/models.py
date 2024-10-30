# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 30, 2024 21:36:38
# Database: sqlite:////tmp/tmp.UdszfqgwZV/turtles/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Habitat(SAFRSBaseX, Base):
    """
    description: Represents habitats designed for specific turtle species.
    """
    __tablename__ = 'habitat'
    _s_collection_name = 'Habitat'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    climate = Column(String)
    size = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)



class Pond(SAFRSBaseX, Base):
    """
    description: Represents ponds where turtles reside.
    """
    __tablename__ = 'pond'
    _s_collection_name = 'Pond'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    water_type = Column(String)
    size = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)



class ResearchProject(SAFRSBaseX, Base):
    """
    description: Research projects associated with the turtle farm.
    """
    __tablename__ = 'research_project'
    _s_collection_name = 'ResearchProject'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    start_date = Column(DateTime)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Staff(SAFRSBaseX, Base):
    """
    description: Represents staff members taking care of turtles.
    """
    __tablename__ = 'staff'
    _s_collection_name = 'Staff'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    hire_date = Column(DateTime)
    role = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class SupplyInventory(SAFRSBaseX, Base):
    """
    description: Manages inventory of supplies for the farm.
    """
    __tablename__ = 'supply_inventory'
    _s_collection_name = 'SupplyInventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    item_name = Column(String, nullable=False)
    quantity = Column(Integer)
    restock_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class Turtle(SAFRSBaseX, Base):
    """
    description: Represents individual turtles in the farm.
    """
    __tablename__ = 'turtle'
    _s_collection_name = 'Turtle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    species = Column(String)
    birth_date = Column(DateTime)
    weight = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    AdoptionApplicationList : Mapped[List["AdoptionApplication"]] = relationship(back_populates="turtle")
    FeedingScheduleList : Mapped[List["FeedingSchedule"]] = relationship(back_populates="turtle")
    HealthCheckList : Mapped[List["HealthCheck"]] = relationship(back_populates="turtle")
    TurtleCareLogList : Mapped[List["TurtleCareLog"]] = relationship(back_populates="turtle")



class Visitor(SAFRSBaseX, Base):
    """
    description: Tracks visitors attending the turtle farm.
    """
    __tablename__ = 'visitor'
    _s_collection_name = 'Visitor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    visit_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class Volunteer(SAFRSBaseX, Base):
    """
    description: Details of volunteers assisting in the farm.
    """
    __tablename__ = 'volunteer'
    _s_collection_name = 'Volunteer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    join_date = Column(DateTime)
    task = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class AdoptionApplication(SAFRSBaseX, Base):
    """
    description: Records applications for turtle adoption.
    """
    __tablename__ = 'adoption_application'
    _s_collection_name = 'AdoptionApplication'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    turtle_id = Column(ForeignKey('turtle.id'))
    applicant_name = Column(String)
    application_date = Column(DateTime)

    # parent relationships (access parent)
    turtle : Mapped["Turtle"] = relationship(back_populates=("AdoptionApplicationList"))

    # child relationships (access children)



class FeedingSchedule(SAFRSBaseX, Base):
    """
    description: Schedule that details feeding times for turtles.
    """
    __tablename__ = 'feeding_schedule'
    _s_collection_name = 'FeedingSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    turtle_id = Column(ForeignKey('turtle.id'), nullable=False)
    feed_time = Column(DateTime)
    food_type = Column(String)

    # parent relationships (access parent)
    turtle : Mapped["Turtle"] = relationship(back_populates=("FeedingScheduleList"))

    # child relationships (access children)



class HealthCheck(SAFRSBaseX, Base):
    """
    description: Records health checks conducted on turtles.
    """
    __tablename__ = 'health_check'
    _s_collection_name = 'HealthCheck'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    turtle_id = Column(ForeignKey('turtle.id'), nullable=False)
    check_date = Column(DateTime)
    notes = Column(String)

    # parent relationships (access parent)
    turtle : Mapped["Turtle"] = relationship(back_populates=("HealthCheckList"))

    # child relationships (access children)



class TurtleCareLog(SAFRSBaseX, Base):
    """
    description: Records the care activities administered to turtles.
    """
    __tablename__ = 'turtle_care_log'
    _s_collection_name = 'TurtleCareLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    turtle_id = Column(ForeignKey('turtle.id'), nullable=False)
    date = Column(DateTime)
    activity = Column(String)

    # parent relationships (access parent)
    turtle : Mapped["Turtle"] = relationship(back_populates=("TurtleCareLogList"))

    # child relationships (access children)
