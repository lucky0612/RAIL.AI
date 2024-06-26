# This is the 
import hashlib
import datetime
import random
import networkx as nx
import matplotlib.pyplot as plt

class Block:
    def __init__(self, index, timestamp, data, previous_hash):
        self.index = index
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        hash_string = str(self.index) + str(self.timestamp) + str(self.data) + str(self.previous_hash)
        return hashlib.sha256(hash_string.encode()).hexdigest()

class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]

    def create_genesis_block(self):
        return Block(0, datetime.datetime.now(), "Genesis Block", "0")

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
    def print_chain(self):
      for block in self.chain:
          print(f"Block {block.index}:")
          print(f"Timestamp: {block.timestamp}")
          print(f"Data: {block.data}")
          print(f"Hash: {block.hash}")
          print(f"Previous Hash: {block.previous_hash}\n")

class TrainSchedulerGA:
    def __init__(self, num_trains, population_size, num_generations, network_graph):
        self.num_trains = num_trains
        self.population_size = population_size
        self.num_generations = num_generations
        self.network_graph = network_graph
        self.blocked_blocks = {}  

    def calculate_arrival_time(self, departure_time, distance, speed):
        return departure_time + (distance / speed)

    def generate_random_routes(self, starting_stations, ending_stations):
        routes = []
        for i in range(self.num_trains):
            starting_station = starting_stations[i]
            ending_station = ending_stations[i]
            route = nx.shortest_path(self.network_graph, source=starting_station, target=ending_station)
            routes.append(route)
        return routes

    def generate_random_schedule(self, starting_stations, ending_stations, train_speeds):
        routes = self.generate_random_routes(starting_stations, ending_stations)
        schedules = []
        for i, route in enumerate(routes):
            schedule = []
            for j in range(len(route)):
                station = route[j]
                departure_time = random.randint(0, 24)
                if j > 0:
                    prev_station = route[j - 1]
                    distance = 50  
                    arrival_time = self.calculate_arrival_time(schedule[j - 1][2], distance, train_speeds[i])
                else:
                    arrival_time = departure_time + 1
                platform_number = random.randint(1, 4)
                schedule.append((station, departure_time, arrival_time, platform_number))
            schedules.append(schedule)
        return schedules

    def calculate_wait_time(self, schedule):
        total_wait_time = 0
        for train_schedule in schedule:
            for i in range(1, len(train_schedule)):
                prev_departure_time = train_schedule[i - 1][1]
                current_arrival_time = train_schedule[i][2]
                wait_time = current_arrival_time - prev_departure_time
                total_wait_time += max(0, wait_time)
        return total_wait_time

    def calculate_headway_time(self, schedule, train_speeds):
        headway_time = 0
        for i in range(len(schedule) - 1):
            last_train_arrival = schedule[i][-1][2]
            next_train_departure = schedule[i + 1][0][1]
            headway = next_train_departure - last_train_arrival
            headway_time += max(0, headway)
        return headway_time

    def fitness(self, schedule, train_speeds):
        wait_time = self.calculate_wait_time(schedule)
        headway_time = self.calculate_headway_time(schedule, train_speeds)
        return max(1, wait_time) + max(0, 20 - headway_time)

    def crossover(self, parent1, parent2):
        crossover_point = random.randint(1, len(parent1) - 1)
        child = parent1[:crossover_point] + parent2[crossover_point:]
        return child

    def mutate(self, schedule, train_speeds):
        mutated_schedule = schedule[:]
        index_to_mutate = random.randint(0, len(mutated_schedule) - 1)
        departure_time = mutated_schedule[index_to_mutate][1]
        if isinstance(departure_time, int):
            arrival_time_lower_bound = max(departure_time + 1, 0)
            arrival_time_upper_bound = 24
            arrival_time = random.randint(arrival_time_lower_bound, arrival_time_upper_bound)
            mutated_schedule[index_to_mutate] = (
                mutated_schedule[index_to_mutate][0],
                random.randint(0, 24),
                arrival_time,
                random.randint(1, 4)
            )
        return mutated_schedule

    def genetic_algorithm(self, starting_stations, ending_stations, train_speeds):
        population = [self.generate_random_schedule(starting_stations, ending_stations, train_speeds) for _ in range(self.population_size)]

        for generation in range(self.num_generations):
            fitness_scores = [self.fitness(schedule, train_speeds) for schedule in population]

            parent_indices = random.choices(range(self.population_size), weights=fitness_scores, k=2)
            parent1 = population[parent_indices[0]]
            parent2 = population[parent_indices[1]]

            offspring = [self.mutate(self.crossover(parent1, parent2), train_speeds) for _ in range(self.population_size)]

            population = offspring

        best_schedule = min(population, key=lambda x: self.fitness(x, train_speeds))
        return best_schedule

    def update_blocked_blocks(self, schedule):
        for train_schedule in schedule:
            for i in range(len(train_schedule) - 1):
                start_block = train_schedule[i][0]
                end_block = train_schedule[i + 1][0]
                time_start = train_schedule[i][2]
                time_end = train_schedule[i + 1][1]
                if (start_block, end_block) in self.blocked_blocks:
                    self.blocked_blocks[(start_block, end_block)].append((time_start, time_end))
                else:
                    self.blocked_blocks[(start_block, end_block)] = [(time_start, time_end)]

    def display_blocked_blocks(self):
        print("Blocked Blocks:")
        for blocks, times in self.blocked_blocks.items():
            print(f"Blocks {blocks} is blocked from:")
            for time in times:
                print(f"- {self.convert_to_12_hour_format(time[0])} to {self.convert_to_12_hour_format(time[1])}")

    def visualize_network(self, routes):
        pos = nx.spring_layout(self.network_graph)
        nx.draw(self.network_graph, pos, with_labels=True, node_size=700, node_color="skyblue", font_size=10)
        for i, route in enumerate(routes):
            nx.draw_networkx_edges(self.network_graph, pos, edgelist=[(route[j], route[j + 1]) for j in range(len(route) - 1)], width=2, alpha=0.7, edge_color=f'C{i}')
        plt.title("Train Network")
        plt.show()

    def display_train_routes(self, routes):
        print("Train Routes:")
        for i, route in enumerate(routes):
            print(f"Train {i + 1}: {route}")

    def display_train_schedule(self, schedule):
        print("Train Schedule:")
        for i, train_schedule in enumerate(schedule):
            print(f"Train {i + 1} Schedule:")
            for j, stop in enumerate(train_schedule):
                station, departure_time, arrival_time, platform_number = stop
                if j == 0:
                    print(f"Station {station}: Departure: {self.convert_to_12_hour_format(departure_time)}")
                elif j == len(train_schedule) - 1:
                    print(f"Station {station}: Arrival: {self.convert_to_12_hour_format(arrival_time)}")
                else:
                    print(f"Station {station}: Departure: {self.convert_to_12_hour_format(departure_time)}, Arrival: {self.convert_to_12_hour_format(arrival_time)}, Platform: {platform_number}")
            print()

    def display_station_schedule(self, schedule):
        print("Station Schedule:")
        for station in range(10):
            print(f"Station {station} Schedule:")
            for i, train_schedule in enumerate(schedule):
                for stop in train_schedule:
                    if stop[0] == station:
                        train_number = i + 1
                        print(f"Train {train_number}: Departure: {self.convert_to_12_hour_format(stop[1])}, Arrival: {self.convert_to_12_hour_format(stop[2])}, Platform: {stop[3]}")
            print()

    def convert_to_12_hour_format(self, time):
        hour = int(time) % 12 if int(time) % 12 != 0 else 12
        minute = int((time % 1) * 60)
        period = "AM" if int(time) < 12 else "PM"
        return f"{hour}:{minute:02d} {period}"

    def visualize_schedule(self, schedule):
        plt.figure(figsize=(12, 6))
        for i, train_schedule in enumerate(schedule):
            for j, stop in enumerate(train_schedule):
                station, departure_time, arrival_time, platform_number = stop
                plt.plot([departure_time, arrival_time], [station, station], label=f'Train {i + 1}', linewidth=2)

        plt.xlabel('Time')
        plt.ylabel('Station')
        plt.title('Train Schedule')
        plt.yticks(range(10), [f'Station {i}' for i in range(10)])
        plt.grid(True)
        plt.legend()
        plt.tight_layout()
        plt.show()

num_trains = int(input("Enter the number of trains: "))
population_size = int(input("Enter the population size: "))
num_generations = int(input("Enter the number of generations: "))
train_speeds = list(map(int, input("Enter the train speeds separated by space: ").split()))
starting_stations = list(map(int, input("Enter the starting stations separated by space: ").split()))
ending_stations = list(map(int, input("Enter the ending stations separated by space: ").split()))
network_graph = nx.connected_watts_strogatz_graph(20, 3, 0.3)
train_scheduler_ga = TrainSchedulerGA(num_trains, population_size, num_generations, network_graph)
best_schedule = train_scheduler_ga.genetic_algorithm(starting_stations, ending_stations, train_speeds)
blockchain = Blockchain()
blockchain.add_block(Block(blockchain.get_latest_block().index + 1, datetime.datetime.now(), best_schedule, blockchain.get_latest_block().hash))
print("Added to Blockchain:")
blockchain.print_chain()
print("Is blockchain valid?", blockchain.is_chain_valid())