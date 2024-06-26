import hashlib
import datetime
class Block:
    def __init__(self, index, timestamp, start_point, end_point, route_points, is_emergency, resolved, emergency_reason, previous_hash):
        self.index = index
        self.timestamp = timestamp
        self.start_point = start_point
        self.end_point = end_point
        self.route_points = route_points
        self.is_emergency = is_emergency
        self.resolved = resolved
        self.emergency_reason = emergency_reason
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()
    def calculate_hash(self):
        hash_string = str(self.index) + str(self.timestamp) + str(self.start_point) + str(self.end_point) + str(self.route_points) + str(self.is_emergency) + str(self.resolved) + str(self.emergency_reason) + str(self.previous_hash)
        return hashlib.sha256(hash_string.encode()).hexdigest()
class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]
    def create_genesis_block(self):
        return Block(0, datetime.datetime.now(), "Genesis", "Genesis", [], False, False, "", "0")
    def get_latest_block(self):
        return self.chain[-1]
    def add_block(self, new_block):
        new_block.previous_hash = self.get_latest_block().hash
        new_block.hash = new_block.calculate_hash()
        self.chain.append(new_block)
    def is_chain_valid(self):
        for i in range(1, len(self.chain)):
            current_block = self.chain[i]
            previous_block = self.chain[i - 1]
            if current_block.hash != current_block.calculate_hash():
                return False
            if current_block.previous_hash != previous_block.hash:
                return False
        return True
    def report_emergency(self):
        start_point = input("Enter start point of the emergency: ")
        end_point = input("Enter end point of the emergency: ")
        route_points = input("Enter route points affected by the emergency (comma-separated): ").split(',')
        reason = input("Enter reason for the emergency: ")
        latest_block = self.get_latest_block()
        new_block = Block(latest_block.index + 1, datetime.datetime.now(), start_point, end_point, route_points, True, False, reason, latest_block.hash)
        self.add_block(new_block)
        print("Emergency reported and added to the blockchain.")
    def resolve_emergency(self):
        emergency_block_index = int(input("Enter the index of the emergency block to resolve: "))
        if emergency_block_index >= len(self.chain):
            print("Invalid block index.")
            return
        emergency_block = self.chain[emergency_block_index]
        if emergency_block.is_emergency and not emergency_block.resolved:
            emergency_block.resolved = True
            print("Emergency resolved and updated in the blockchain.")
        else:
            print("This block does not represent an unresolved emergency.")
blockchain = Blockchain()
blockchain.add_block(Block(1, datetime.datetime.now(), "Start Point 1", "End Point 1", ["Route Point 1", "Route Point 2"], False, False, "", blockchain.get_latest_block().hash))
blockchain.add_block(Block(2, datetime.datetime.now(), "Start Point 2", "End Point 2", ["Route Point 3", "Route Point 4"], False, False, "", blockchain.get_latest_block().hash))
blockchain.report_emergency()
blockchain.resolve_emergency()
print("Is blockchain valid?", blockchain.is_chain_valid())
