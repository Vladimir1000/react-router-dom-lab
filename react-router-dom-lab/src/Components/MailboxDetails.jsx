import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find( (mailbox) => mailbox._id.toString() === mailboxId );

    if (!selectedBox) {
        return <h1>Mailbox Not Found!</h1>;
    }

    return (
        <div className="Mailbox-Details">
            <h1>Mailbox {selectedBox._id}</h1>
            <p>Boxholder: {selectedBox.boxholder}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </div>
    );
};

export default MailboxDetails;
