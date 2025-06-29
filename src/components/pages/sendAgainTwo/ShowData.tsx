import { Avatar } from "@heroui/react";

export default function ShowData() {
    return (
        <>
            <p>Transfer Successful</p>
            <p>Your transacion was successfull</p>
            <p>$ 1.500</p>
            <p>Send To</p>

            <div className="flex items-center gap-2">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <div className="flex flex-col gap-0">
                    <h2>Gustavo</h2>
                </div>
            </div>

            <h2>Transaction Details</h2>
            <div>
                <div className="flex justify-between">
                    <p>Payment</p>
                    <p>Amount</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <p>Payment</p>
                    <p>Amount</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <p>Payment</p>
                    <p>Amount</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <p>Payment</p>
                    <p>Amount</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <p>Payment</p>
                    <p>Amount</p>
                </div>
            </div>
        </>
    );
}
