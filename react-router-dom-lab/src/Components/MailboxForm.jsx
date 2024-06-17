import { useNavigate } from "react-router-dom";

function MailboxForm(props) {

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox({ boxholder : props.newMailbox.boxholder, boxSize: props.newMailbox.boxSize})
        navigate('/mailboxes');
    }

    const newMailbox = props.newMailbox

    return(
        <form onSubmit={handleSubmit} className="Mailbox-Form">
            <input 
                type="text"
                value={newMailbox.boxholder}
                onChange={props.handleChange}
                name="boxholder"
                placeholder="Boxholder Name"
                required
            />
            <select 
                value={newMailbox.boxSize}
                onChange={props.handleChange}
                name="boxSize"
            >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <button type="submit">Create Mailbox</button>
        </form>

        
    )
}

export default MailboxForm;