import '../css/separator.scss'
const { Component } = wp.element;
class Separator extends Component {
    render() {
        const { label, customClassName } = this.props
        return (
            <div className={`qubely-field-separator qubely-field ${customClassName ? customClassName : ''}`}>
                {label &&
                    <label>{label}</label>
                }
            </div>
        )
    }
}

export default Separator;