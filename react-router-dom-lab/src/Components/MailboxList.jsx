import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    
    const mailboxes = props.mailboxes;

    return (
        <div className="Mailbox-List">
            {mailboxes.map((mailbox) => (
                <div key={mailbox._id} className="mail-box">
                    <Link to={`/mailboxes/${mailbox._id}`}>
                        Mail Box {mailbox._id}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MailboxList;
