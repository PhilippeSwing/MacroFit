import React, { Component } from 'react';

class CreateMeso extends Component {
    mesoWeeksRef = React.createRef();
    noWorkoutDaysRef = React.createRef();

    createMesoFrame = (e) => {
        e.preventDefault();
        const mesoFrame = {
            weeks: Number(this.mesoWeeksRef.current.value),
            days: Number(this.noWorkoutDaysRef.current.value),
        }
        this.props.addMesoFrame(mesoFrame);


        // Take the number of workout days from state and render the same number of WorkoutDayButton components
    }

    render() {
        return (
            <section className="create-meso">
                <h2 className="create-meso__header header-page">Create Mesocycle</h2>
                <form action="" onSubmit={this.createMesoFrame}>
                    <label htmlFor="mesoWeeks">No. of Weeks</label>
                    <select name="weeks" id="mesoWeeks" ref={this.mesoWeeksRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>

                    <label htmlFor="noWorkoutDays">No. of Workouts Per Microcycle/Week</label>
                    <select name="days" id="noWorkoutDays" ref={this.noWorkoutDaysRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>

                    <button type="submit">Go</button>
                </form>
            </section>
        );
    }
}

export default CreateMeso;